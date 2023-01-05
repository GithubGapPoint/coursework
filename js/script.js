window.addEventListener('load', function() {

    let in1 = this.document.querySelector('.in1');
    let in2 = this.document.querySelector('.in2');
    let in3 = this.document.querySelector('.in3');
    let in4 = this.document.querySelector('.in4');
    let in5 = this.document.querySelector('.in5');
    let in6 = this.document.querySelector('.in6');
    let in7 = this.document.querySelector('.in7');
    let btn = this.document.querySelector('.btn');
    let res = this.document.querySelector('.res');
    btn.addEventListener('click', function() {
        let inp1 = in1.value;
        let inp2 = in2.value;
        let inp3 = in3.value;
        let inp4 = in4.value;
        let inp5 = in5.value;
        let inp6 = in6.value;
        let inp7 = in7.value;
        let result;
        result = inp1 + inp2 + inp3 + inp4 + inp5 + inp6 + inp7;
        if (isNaN(result)) {
            res.innerHTML = 'Значения не введены'
        }
        res.innerHTML = inp1 + ' ' + inp2 + '. — ' + inp3 + ' изд. — ' + inp4 + ': ' + inp5 + ', ' + inp6 + '. — ' + inp7 + ' c.';
    })

});