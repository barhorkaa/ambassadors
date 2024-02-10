import NavBar from "./ui/nav-bar";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-44 py-8 items-start">
      <h2 className="font-bold text-xl">
        Co je ambasadorský program?
      </h2>
      <p className="py-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed sollicitudin hendrerit accumsan. Fusce eu ex odio.
        Quisque enim erat, dapibus in turpis nec, iaculis consectetur dui.
        Nunc facilisis mi non ante porttitor, sed eleifend arcu condimentum.
        Maecenas quis volutpat turpis. Sed blandit libero lacinia ex condimentum,
        a aliquam velit pulvinar. Sed eros velit, bibendum sit amet vehicula sed,
        scelerisque vitae dui.
      </p>
      <h2 className="font-bold text-xl">
        Kam můžu jako ambasador jet?
      </h2>
      <p className="py-6">
        In ut massa ipsum. Nunc ut convallis enim.
        Pellentesque efficitur nunc mi, euismod blandit turpis aliquam fermentum.
        Aenean fringilla sapien sapien, et auctor velit consequat eget. Nam porttitor
        tortor ac purus fringilla ornare. Cras nec congue ligula, in mollis magna. Sed
        lectus nibh, egestas in auctor quis, fringilla ut ex.
      </p>
      <h2 className="font-bold text-xl">
        A to to jako budu dělat zdarma?
      </h2>
      <p className="py-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed sollicitudin hendrerit accumsan. Fusce eu ex odio.
        Quisque enim erat, dapibus in turpis nec, iaculis consectetur dui.
        Nunc facilisis mi non ante porttitor, sed eleifend arcu condimentum.
      </p>
      <h2 className="font-bold text-xl">
        Koho kotaktovat jestli necomu nechapu?
      </h2>
    </main>
  )
}
