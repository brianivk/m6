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
    { "label": "5, 9, 12, 28, 36, 43", "value": "5, 9, 12, 28, 36, 43", "question": "The drawn entry is: 5, 9, 12, 28, 36, 43" },
    { "label": "3, 13, 11, 18, 41, 49", "value": "3, 13, 11, 18, 41, 49", "question": "The drawn entry is: 3, 13, 11, 18, 41, 49" },
    { "label": "7, 9, 17, 22, 33, 36", "value": "7, 9, 17, 22, 33, 36", "question": "The drawn entry is: 7, 9, 17, 22, 33, 36" },
    { "label": "9, 17, 22, 47, 48, 49", "value": "9, 17, 22, 47, 48, 49", "question": "The drawn entry is: 9, 17, 22, 47, 48, 49" },
    { "label": "2, 4, 13, 23, 33, 47", "value": "2, 4, 13, 23, 33, 47", "question": "The drawn entry is: 2, 4, 13, 23, 33, 47" },
    { "label": "10, 18, 24, 25, 33, 37", "value": "10, 18, 24, 25, 33, 37", "question": "The drawn entry is: 10, 18, 24, 25, 33, 37" },
    { "label": "5, 11, 23, 31, 42, 49", "value": "5, 11, 23, 31, 42, 49", "question": "The drawn entry is: 5, 11, 23, 31, 42, 49" },
    { "label": "14, 22, 29, 37, 41, 48", "value": "14, 22, 29, 37, 41, 48", "question": "The drawn entry is: 14, 22, 29, 37, 41, 48" },
    { "label": "3, 6, 9, 21, 36, 41", "value": "3, 6, 9, 21, 36, 41", "question": "The drawn entry is: 3, 6, 9, 21, 36, 41" },
    { "label": "2, 4, 9, 12, 25, 30", "value": "2, 4, 9, 12, 25, 30", "question": "The drawn entry is: 2, 4, 9, 12, 25, 30" },
    { "label": "9, 11, 17, 25, 28, 40", "value": "9, 11, 17, 25, 28, 40", "question": "The drawn entry is: 9, 11, 17, 25, 28, 40" },
    { "label": "1, 9, 13, 16, 23, 44", "value": "1, 9, 13, 16, 23, 44", "question": "The drawn entry is: 1, 9, 13, 16, 23, 44" },
    { "label": "9, 34, 35, 36, 38, 46", "value": "9, 34, 35, 36, 38, 46", "question": "The drawn entry is: 9, 34, 35, 36, 38, 46" },
    { "label": "7, 12, 20, 29, 38, 44", "value": "7, 12, 20, 29, 38, 44", "question": "The drawn entry is: 7, 12, 20, 29, 38, 44" },
    { "label": "5, 22, 28, 36, 47, 49", "value": "5, 22, 28, 36, 47, 49", "question": "The drawn entry is: 5, 22, 28, 36, 47, 49" },
    { "label": "3, 8, 10, 11, 17, 30", "value": "3, 8, 10, 11, 17, 30", "question": "The drawn entry is: 3, 8, 10, 11, 17, 30" },
    { "label": "2, 3, 6, 18, 23, 42", "value": "2, 3, 6, 18, 23, 42", "question": "The drawn entry is: 2, 3, 6, 18, 23, 42" },
    { "label": "6, 10, 12, 20, 21, 36", "value": "6, 10, 12, 20, 21, 36", "question": "The drawn entry is: 6, 10, 12, 20, 21, 36" },
    { "label": "10, 11, 22, 37, 41, 47", "value": "10, 11, 22, 37, 41, 47", "question": "The drawn entry is: 10, 11, 22, 37, 41, 47" },
    { "label": "9, 13, 17, 25, 36, 49", "value": "9, 13, 17, 25, 36, 49", "question": "The drawn entry is: 9, 13, 17, 25, 36, 49" },
    { "label": "1, 4, 15, 22, 27, 34", "value": "1, 4, 15, 22, 27, 34", "question": "The drawn entry is: 1, 4, 15, 22, 27, 34" },
    { "label": "2, 13, 20, 27, 37, 49", "value": "2, 13, 20, 27, 37, 49", "question": "The drawn entry is: 2, 13, 20, 27, 37, 49" },
    { "label": "3, 8, 19, 32, 44, 49", "value": "3, 8, 19, 32, 44, 49", "question": "The drawn entry is: 3, 8, 19, 32, 44, 49" },
    { "label": "1, 6, 11, 18, 28, 36", "value": "1, 6, 11, 18, 28, 36", "question": "The drawn entry is: 1, 6, 11, 18, 28, 36" },
    { "label": "5, 12, 17, 29, 46, 47", "value": "5, 12, 17, 29, 46, 47", "question": "The drawn entry is: 5, 12, 17, 29, 46, 47" },
    { "label": "12, 15, 16, 28, 30, 38", "value": "12, 15, 16, 28, 30, 38", "question": "The drawn entry is: 12, 15, 16, 28, 30, 38" },
    { "label": "5, 12, 18, 24, 31, 48", "value": "5, 12, 18, 24, 31, 48", "question": "The drawn entry is: 5, 12, 18, 24, 31, 48" },
    { "label": "9, 18, 20, 25, 32, 41", "value": "9, 18, 20, 25, 32, 41", "question": "The drawn entry is: 9, 18, 20, 25, 32, 41" },
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
    if ((oldpick.length == data.length) || (oldpick.length == 6)) {
        console.log("done");
        container.on("click", null);
        alert("Completed on this entry. Good luck!")
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
            //drawnNumber.sort(); // this might lead to error due to string comparison!!! Try below:
            // drawnNumber.sort((a, b) => a - b);
            console.log("Your drawn entries are:\n"+drawnNumber.join('\r\n'));
            /* Output the drawn numbers */
            d3.select("#question h2")
                .html(drawnNumber.join('<br>'));
                // .text(drawnNumber.join('&lt;br&gt;'));

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