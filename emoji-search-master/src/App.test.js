import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

describe("Todo testleri", () => {
  let emoji100, input;
  beforeEach(() => {
    render(<App />);
    emoji100 = screen.getByText(/100/i);
    input = screen.getByPlaceholderText(/search emoji/i);
  });

  it("Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.", () => {
    const headerText = screen.getByText(/Emoji Search/i);

    expect(headerText).toBeInTheDocument();
  });
  it("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test kodunu yazın.", () => {
    expect(emoji100).toBeInTheDocument();
  });
  it("Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test kodunu yazın.", () => {
    const emojiText = "Smil";
    userEvent.type(input, emojiText);
    expect(emoji100).not.toBeInTheDocument();
  });
  it("Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test kodunu yazın.", () => {
    //öncelikle execCommand'i mockluyoruz.
    document.execCommand = jest.fn(); // execCommand detaylı bakmak için link: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
    //uygulamayı ayağa kaldırıp console üzerinden document.execCommand("copy") yazdığınızda fareniz ile daha önce seçtiğiniz yeri kopyalar. execCommand'in bunun gibi fonksiyonları var.
    userEvent.click(emoji100); //emoji100 üzerine tıklamayı sağlıyoruz

    expect(document.execCommand).toBeCalledWith("copy"); // burada execCommand'in 'copy' olarak çağırılıp çağırılmadığını soruyoruz

    const copyEmoji = window.ClipboardData; //kopyalanan datayı alıyoruz.
    expect(copyEmoji).toEqual(emoji100.value);
  });
});
