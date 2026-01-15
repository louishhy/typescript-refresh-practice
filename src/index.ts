function main() {
  const name = process.argv[2] ?? "world";
  console.log(`Hello, ${name}`);
}

main();