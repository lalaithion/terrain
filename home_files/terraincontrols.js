function addSVG(div) {
    return div.insert("svg", ":first-child")
        .attr("height", 1000)
        .attr("width", 1000)
        .attr("viewBox", "-500 -500 1000 1000");
}

var finalDiv = d3.select("div#final");
var finalSVG = addSVG(finalDiv);

finalDiv.append("button")
    .text("Generate high resolution map")
    .on("click", function () {
        doMap(finalSVG, defaultParams);
    });
