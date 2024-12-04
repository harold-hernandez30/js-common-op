function outer() {
  var outerVar = "OuterVar";

  function inner() {
    var innerVar = "InnerVar";

    if (true) {
      var insideIf = "insideIf";
      console.log("(inside if): ", insideIf);
    }
    console.log("outside if: ", insideIf);

    console.log("==============inner()==================");
    console.log("outerVar:", outerVar);
    console.log("innerVar:", innerVar);
  }

  inner();
  console.log("==============outer()==================");
  console.log("outerVar:", outerVar);
  console.log("innerVar:", innerVar);
}
outer();
console.log("==============main()==================");
console.log("outerVar:", outerVar);
console.log("innerVar:", innerVar);
