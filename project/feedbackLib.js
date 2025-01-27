if (require.main === module) {
    let result = addOne("John Smith", {"message": "Great session on React components! I found the examples very helpful."}, 4);
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    // rest of the tests here
   }