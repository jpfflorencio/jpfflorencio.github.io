function programa0() {
  document.getElementById("ml0").classList.toggle("apresentar0");
}
window.onclick = function(e) {
  if (!e.target.matches('.bt0')) {
  var ml0 = document.getElementById("ml0");
    if (ml0.classList.contains('apresentar0')) {
      ml0.classList.remove('apresentar0');
    }
  }
}


function programa1() {
    document.getElementById("ml1").classList.toggle("apresentar1");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.bt1')) {
    var ml1 = document.getElementById("ml1");
      if (ml1.classList.contains('apresentar1')) {
        ml1.classList.remove('apresentar1');
      }
    }
  }

  function programa2() {
    document.getElementById("ml2").classList.toggle("apresentar1");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.ml2')) {
    var ml2 = document.getElementById("ml2");
      if (ml2.classList.contains('apresentar2')) {
        ml2.classList.remove('apresentar2');
      }
    }
  }

  function programa3() {
    document.getElementById("ml3").classList.toggle("apresentar3");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.bt3')) {
    var ml3 = document.getElementById("ml1");
      if (ml3.classList.contains('apresentar3')) {
        ml3.classList.remove('apresentar3');
      }
    }
  }


  function programa4() {
    document.getElementById("ml4").classList.toggle("apresentar4");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.bt4')) {
    var ml4 = document.getElementById("ml4");
      if (ml4.classList.contains('apresentar4')) {
        ml4.classList.remove('apresentar4');
      }
    }
  }

  function programa5() {
    document.getElementById("ml5").classList.toggle("apresentar5");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.bt5')) {
    var ml5 = document.getElementById("ml5");
      if (ml5.classList.contains('apresentar5')) {
        ml5.classList.remove('apresentar5');
      }
    }
  }

  function programa6() {
    document.getElementById("ml6").classList.toggle("apresentar6");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.bt6')) {
    var ml6 = document.getElementById("ml6");
      if (ml6.classList.contains('apresentar6')) {
        ml6.classList.remove('apresentar6');
      }
    }
  }

  
  jQuery(window).load(function($){
    atualizaRelogio();
  });

  function atualizaRelogio(){ 
    var momentoAtual = new Date();
    
    var vhora = momentoAtual.getHours();
    var vminuto = momentoAtual.getMinutes();
    var vsegundo = momentoAtual.getSeconds();
    
    var vdia = momentoAtual.getDate();
    var vmes = momentoAtual.getMonth() + 1;
    var vano = momentoAtual.getFullYear();
    
    if (vdia < 10){ vdia = "0" + vdia;}
    if (vmes < 10){ vmes = "0" + vmes;}
    if (vhora < 10){ vhora = "0" + vhora;}
    if (vminuto < 10){ vminuto = "0" + vminuto;}
    if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

    dataFormat = vdia + "/" + vmes + "/" + vano;
    horaFormat = vhora + ":" + vminuto;

    document.getElementById("data").innerHTML = dataFormat;
    document.getElementById("hora").innerHTML = horaFormat;

    setTimeout("atualizaRelogio()",1000);
  }


