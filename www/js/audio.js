var idSoundIncrement = 0;
class Audio{
          constructor(path,volume){
            this.audioRand1 = $('#btnRand');
            this.danse = $('#danseRand');
            $("#zoneAudio").prepend("<audio  id='sound-"+idSoundIncrement+"' ><source src='"+path+"' type='audio/mpeg'></audio>");
            this.target = "#sound-"+idSoundIncrement;
            this.targetElt  = $(document).find(this.target)[0];
            this.targetElt.volume = volume;
            idSoundIncrement++;
            if($("#zoneAudio audio").length){
                $("#zoneAudio").html("");
                idSoundIncrement = 0;
            }
          }
          replay(){
            if(this.targetElt.paused){
              this.targetElt.currentTime = 0;
              this.targetElt.play();
            }
          }
          play(){
            if(this.targetElt.paused)
              this.targetElt.play();
            else
              this.targetElt.currentTime = 0;
          }
          pause(){
            if(!this.targetElt.paused)
              this.targetElt.pause();
          }
          stop(){
            if(this.targetElt.paused)
              this.targetElt.currentTime = 0;
            else{
              this.targetElt.pause();
              this.targetElt.currentTime = 0;
            }

          }
}

