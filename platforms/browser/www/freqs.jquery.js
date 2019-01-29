var freqs = (function(){
  return {
    mod1 : function(freq){
      //console.log(freq);
			T('perc',{r:500},T('sin', {freq: freq, mul: 1})).on('ended',function(){
				this.pause();
			}).bang().play();
		},

		mod2 : function(freq){
      console.log(freq);
			T('perc',{r:500},T('saw', {freq: freq, mul: 0.5})).on('ended',function(){
				this.pause();
			}).bang().play();
		},

		mod3 : function(freq){
			T('perc',{r:50},T('sin', {freq: freq, mul: 0.5})).on('ended',function(){
				this.pause();
			}).bang().play();
		},

		mod4 : function(freq){
			T('perc',{r:50},T('saw', {freq: freq, mul: 0.5})).on('ended',function(){
				this.pause();
			}).bang().play();
		}
  }
})();

$.fn.freqs = function(opt={modus:1}){
  var f = '110';
  if($(this).val() != '' && $(this).val() != undefined){
    f = $(this).val();
  }
  f = parseInt(f);

  var mod = opt['modus'];
  //console.log(f,mod);
  if(f != ''){
    switch(mod){
      case 1:
        freqs.mod1(f);
        break;
      case 2:
        freqs.mod2(f);
        break;
      case 3:
        freqs.mod3(f);
        break;
      case 4:
        freqs.mod4(f);
        break;
      default:
        freqs.mod1(f);
        break;
    }
  }
};
