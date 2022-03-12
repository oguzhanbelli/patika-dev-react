import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe("Todo testleri", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Ekle");
    input = screen.getByLabelText("Text");
  });

  test("varsayılan olarak verilen 3 nesne render edilmeli", () => {
    const items = screen.getAllByText(/Item/i);
    expect(items.length).toEqual(3);
  });
  test("input ve button dökümanda bulunmalı", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("inputa string girilip butona basılınca listeye eklenmeli", () => {
    //İnputu DOldur
    const name = "Oğuzhan";

    userEvent.type(input, name);
    //BUTONA TIKLATTIR
    userEvent.click(button);

    //Bişeyleri bekleyeceğiz assertion 

    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
