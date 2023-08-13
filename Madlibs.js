document.getElementById('t').onclick = function() {
    let paragraph = document.getElementById('p')
    let val1 = document.getElementById('1').value
    let val2 = document.getElementById('2').value
    let val3 = document.getElementById('3').value
    let val4 = document.getElementById('4').value
    paragraph.innerHTML = `One Day, my friend <b style="color:blue">${val1}</b> was visiting New York and ran into <b style="color:blue">${val2}</b>,
    <b style="color:blue">${val1}</b> ran <b style="color:blue">${val3}</b> to meet <b style="color:blue">${val2}</b>. But <b style="color:blue">${val2}</b> turned out to be very
    <b style="color:blue">${val4}</b> and <b style="color:blue">${val1}</b> did not enjoy the meeting`
}