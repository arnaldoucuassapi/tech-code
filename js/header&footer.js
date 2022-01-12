var comecarCurso = 0

function header_footer() {
    pesquisa()
    document.getElementById('closeResults').addEventListener('click', function(){
        document.getElementById('results').style.display = 'none '
    })
}

function pesquisa() {
    var inputPesquisar = document.getElementById('inputPesquisar')
}

function search() {
    var results = document.getElementById('results')
    var i, cont = 0
    var cursoPesquisado = String(document.getElementById('inputPesquisar').value).toUpperCase()
    var iconePesquisado = document.getElementById('iconePesquisado')
    var descricaoPesquisa = document.getElementById('descricaoPesquisa')
    var linkPesquisado = document.getElementById('linkPesquisado')

    var curso = ['HTML', 'CSS', 'JAVASCRIPT', 'C', 'C#', 'PYTHON', 'JAVA', 'C++', 'PHP', 'EXCEL', 'PHOTOSHOP', 'WORD', 'MYSQL', 'NODEJS', 'RUBY']
    var iconeCurso = ['img/html5-official.svg', 'img/css3-official.svg', 'img/javascript-official.svg', 'img/linguagemC-official.svg', 'img/csharp-official.svg', 'img/python-official.svg', 'img/java-official.svg', 'img/cpp-official.svg', 'img/php-official.svg', 'img/excel.svg', 'img/photoshop.svg', 'img/word.svg', 'img/mysql-official.svg', 'img/nodejs-official.svg', 'img/ruby.svg']
    var descricaoCurso = ['HTML5 - HyperText Markup Language.', 'CSS3 - Cascading Style Sheet.', 'JavaScript - Linguagem interativa.', 'Linguagem C - Primeira linguagem a ser criada.','C# - Usada para criar aplicaçoes para o Windows.', 'Python - Uma das mais influentes do mundo.', 'Java - Mais Usada para criaçoes de aplicativos mobile.', 'C++ - ', 'PHP -', 'Excel -', 'Photoshop -', 'Word -', 'MySQL -', 'NodeJS -', 'Ruby -']
    var linkCurso = ['cursos.html#html5', 'cursos.html#css3', 'cursos.html#javascript', 'cursos.html#linguagemC', 'cursos.html#csharp', 'cursos.html#python', 'cursos.html#java', 'cursos.html#cpp', 'cursos.html#php', 'cursos.html#excel', 'cursos.html#photoshop', 'cursos.html#word', 'cursos.html#mysql', 'cursos.html#nodejs', 'cursos.html#ruby']
    
    for(i=0; i<curso.length; i++){
        if(cursoPesquisado==curso[i]){
            if(comecarCurso!=1) iconePesquisado.src = iconeCurso[i] 
            else iconePesquisado.src = '../' + iconeCurso[i]

            descricaoPesquisa.innerText = descricaoCurso[i]
            linkPesquisado.href = linkCurso[i]
            linkPesquisado.innerText = 'Começar'
        }else{
            cont++
        }

        if(cont==curso.length){
            iconePesquisado.src = ''
            descricaoPesquisa.innerText = 'Infelizmente, nao temos este curso!'
            linkPesquisado.href = '#'
            linkPesquisado.innerText = ''
        }
    }
    results.style.display = 'block'
}

