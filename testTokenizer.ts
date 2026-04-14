import { tokenize } from "./src/lexer/tokenizer";

const sourceCode = `dhara x = 10
dhara nama = "Suvam"
dhara active = satya

dekha nama

jadi x > 5 tahale
  dekha "x bada"
nahile
  dekha "x chhota"
sesa`;

try {
  const tokens = tokenize(sourceCode);
  console.log(JSON.stringify(tokens, null, 2));
} catch (error) {
  if (error instanceof Error) {
    console.error("Tokenizer Error:", error.message);
  } else {
    console.error("Unknown tokenizer error");
  }
}
