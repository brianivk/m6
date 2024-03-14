var drawnNumber = [];
var padding = { top: 20, right: 40, bottom: 0, left: 0 },
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20();//category20c()
//randomNumbers = getRandomNumbers();
//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
var data = [
    { "label": "1", "value": 1, "question": "The next drawn number is: 1" },
    { "label": "2", "value": 2, "question": "The next drawn number is: 2" },
    { "label": "3", "value": 3, "question": "The next drawn number is: 3" },
    { "label": "4", "value": 4, "question": "The next drawn number is: 4" },
    { "label": "5", "value": 5, "question": "The next drawn number is: 5" },
    { "label": "6", "value": 6, "question": "The next drawn number is: 6" },
    { "label": "7", "value": 7, "question": "The next drawn number is: 7" },
    { "label": "8", "value": 8, "question": "The next drawn number is: 8" },
    { "label": "9", "value": 9, "question": "The next drawn number is: 9" },
    { "label": "10", "value": 10, "question": "The next drawn number is: 10" },
    { "label": "11", "value": 11, "question": "The next drawn number is: 11" },
    { "label": "12", "value": 12, "question": "The next drawn number is: 12" },
    { "label": "13", "value": 13, "question": "The next drawn number is: 13" },
    { "label": "14", "value": 14, "question": "The next drawn number is: 14" },
    { "label": "15", "value": 15, "question": "The next drawn number is: 15" },
    { "label": "16", "value": 16, "question": "The next drawn number is: 16" },
    { "label": "17", "value": 17, "question": "The next drawn number is: 17" },
    { "label": "18", "value": 18, "question": "The next drawn number is: 18" },
    { "label": "19", "value": 19, "question": "The next drawn number is: 19" },
    { "label": "20", "value": 20, "question": "The next drawn number is: 20" },
    { "label": "21", "value": 21, "question": "The next drawn number is: 21" },
    { "label": "22", "value": 22, "question": "The next drawn number is: 22" },
    { "label": "23", "value": 23, "question": "The next drawn number is: 23" },
    { "label": "24", "value": 24, "question": "The next drawn number is: 24" },
    { "label": "25", "value": 25, "question": "The next drawn number is: 25" },
    { "label": "26", "value": 26, "question": "The next drawn number is: 26" },
    { "label": "27", "value": 27, "question": "The next drawn number is: 27" },
    { "label": "28", "value": 28, "question": "The next drawn number is: 28" },
    { "label": "29", "value": 29, "question": "The next drawn number is: 29" },
    { "label": "30", "value": 30, "question": "The next drawn number is: 30" },
    { "label": "31", "value": 31, "question": "The next drawn number is: 31" },
    { "label": "32", "value": 32, "question": "The next drawn number is: 32" },
    { "label": "33", "value": 33, "question": "The next drawn number is: 33" },
    { "label": "34", "value": 34, "question": "The next drawn number is: 34" },
    { "label": "35", "value": 35, "question": "The next drawn number is: 35" },
    { "label": "36", "value": 36, "question": "The next drawn number is: 36" },
    { "label": "37", "value": 37, "question": "The next drawn number is: 37" },
    { "label": "38", "value": 38, "question": "The next drawn number is: 38" },
    { "label": "39", "value": 39, "question": "The next drawn number is: 39" },
    { "label": "40", "value": 40, "question": "The next drawn number is: 40" },
    { "label": "41", "value": 41, "question": "The next drawn number is: 41" },
    { "label": "42", "value": 42, "question": "The next drawn number is: 42" },
    { "label": "43", "value": 43, "question": "The next drawn number is: 43" },
    { "label": "44", "value": 44, "question": "The next drawn number is: 44" },
    { "label": "45", "value": 45, "question": "The next drawn number is: 45" },
    { "label": "46", "value": 46, "question": "The next drawn number is: 46" },
    { "label": "47", "value": 47, "question": "The next drawn number is: 47" },
    { "label": "48", "value": 48, "question": "The next drawn number is: 48" },
    { "label": "49", "value": 49, "question": "The next drawn number is: 49" },
];
var svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);
var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
var vis = container
    .append("g");

var pie = d3.layout.pie().sort(null).value(function (d) { return 1; });
// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);
// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice")
    .data(pie)
    .enter()
    .append("g")
    .attr("class", "slice");

arcs.append("path")
    .attr("fill", function (d, i) { return color(i); })
    .attr("d", function (d) { return arc(d); });
// add the text
arcs.append("text").attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 10) + ")";
})
    .attr("text-anchor", "end")
    .text(function (d, i) {
        return data[i].label;
    });
container.on("click", spin);
function spin(d) {

    container.on("click", null);
    //all slices have been seen, all done
    console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
    if (oldpick.length == data.length) {
        console.log("done");
        container.on("click", null);
        return;
    }
    var ps = 360 / data.length,
        pieslice = Math.round(1440 / data.length),
        rng = Math.floor((Math.random() * 1440) + 360);

    rotation = (Math.round(rng / ps) * ps);

    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? (picked % data.length) : picked;
    if (oldpick.indexOf(picked) !== -1) {
        d3.select(this).call(spin);
        return;
    } else {
        oldpick.push(picked);
    }
    rotation += 90 - Math.round(ps / 2);
    vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function () {
            //mark question as seen
            d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                .attr("fill", "#111");
            //populate question
            d3.select("#question h1")
                .text(data[picked].question);
            oldrotation = rotation;

            /* Get the result value from object "data" */
            console.log(data[picked].value)
            /* Insert into my drawn numbers */
            drawnNumber.push(data[picked].value)
            drawnNumber.sort();
            console.log("Your drawn numbers are: "+drawnNumber)
            /* Output the drawn numbers */
            d3.select("#question h2")
                .text(drawnNumber);

            /* Comment the below line for restrict spin to sngle time */
            container.on("click", spin);
        });
}
//make arrow
svg.append("g")
    .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
    .append("path")
    .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
    .style({ "fill": "black" });
//draw spin circle
container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({ "fill": "white", "cursor": "pointer" });
//spin text
container.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("SPIN")
    .style({ "font-weight": "bold", "font-size": "30px" });


function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function (t) {
        return "rotate(" + i(t) + ")";
    };
}


function getRandomNumbers() {
    var array = new Uint16Array(1000);
    var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
    if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
        window.crypto.getRandomValues(array);
        console.log("works");
    } else {
        //no support for crypto, get crappy random numbers
        for (var i = 0; i < 1000; i++) {
            array[i] = Math.floor(Math.random() * 100000) + 1;
        }
    }
    return array;
}