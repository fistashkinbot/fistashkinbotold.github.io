var text = "FistashkinBot - Discord Bot!";
var delay = 75; // c�������
var elem = document.getElementById("result");
 
var print_text = function(text, elem, delay) {
    if(text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(
            function() {
                print_text(text.slice(1), elem, delay); 
            }, delay
        );
    }
}
print_text(text, elem, delay);