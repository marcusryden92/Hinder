import useQuoteApi from "../hooks/useQuoteApi";

export default function Footer() {
  const { quote } = useQuoteApi();
  return (
    <div
      className={`w-screen font-serif
    align-middle
    text-center
    italic
    text-sm
    pt-4 
    shadow-lg
    text-black-300
    p-6 `}
    >
      "{quote}" <br />
    </div>
  );
}
