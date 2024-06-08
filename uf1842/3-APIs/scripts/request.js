const getPuzzle = async function (wordCount) {
    const response = await fetch ('https://puzzle.mead.io/puzzle?wordCount=2');
    console.log(response);
    const data = await response.json();
    console.log(data);

    return data.puzzle;

};

