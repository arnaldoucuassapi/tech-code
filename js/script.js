var cont = 2

function main() {
    header_footer()
    comentarios()
}

function comentarios(){
    var imgComent = document.getElementById('imgComent')
    var textComent = document.getElementById('textComent')
    var img1 = 'img/coment1.png'
    var img2 = 'img/coment2.png'
    var text1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam eos eius, voluptatum reiciendis temporibus vitae facilis perferendis libero unde eum officia? Ipsa quasi iste tenetur aliquam vero eaque quis maxime!'
    var text2 = 'amet Lorem ipsum qurehthi xrg irkhci gu cgrujturhjtf tr terytuy u yyrur fghfyjyf gth fhtjhgh fjhfh gfhfh hggd gdgnddddddddddddg dddddddddds   d g  g gh  jfjghjhsdj fdgdsfusf sfs hfbsuf sufsjf sufbd fuf jdfbu df?'

    setTimeout(function () {
        switch (cont) {
            case 1:
                imgComent.src = img1
                textComent.innerText = text1
                cont++
                break
        
            case 2:
                imgComent.src = img2
                textComent.innerText = text2
                cont--
                break
        }

        comentarios()
    }, 2500)
}