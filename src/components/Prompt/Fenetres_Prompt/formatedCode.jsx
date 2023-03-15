import React from "react";

const OUTZIDER = `
    
....                                 s                  .       ..                               
.x~X88888Hx.                        :8                 @88>   dF                                 
H8X 888888888h.      x.    .        .88         ..      %8P   '88bu.                    .u    .   
8888:*888888888:   .@88k  z88u     :888ooo    .@88i      .    '*88888bu        .u     .d88B :@8c  
88888:        8  "8888 ^8888   -*8888888   ""%888>   .@88u    ^"*8888N    ud8888.  ="8888f8888r 
. 88888          ?   8888  888R     8888        '88%   ''888E  beWE "888L :888'8888.   4888>'88"  
. ?888%           X   8888  888R     8888      ..dILr~   888E   888E  888E d888 '88%"   4888>     
~*??.            >   8888  888R     8888     '".-%88b    888E   888E  888E 8888.+"      4888>      
.x88888h.        <    8888 ,888B .  .8888Lu=   @  888k   888E   888E  888F 8888L       .d888L .+   
:"""8888888x..  .x    "8888Y 8888"   ^%888*    8F   8888   888&  .888N..888  '8888c. .+  ^"8888*"    
    *888888888"      Y"   'YP       'Y"    '8    8888   R888"  "888*""    "88888%       "Y"      
    ""***""                               '8    888F    ""       ""         "YP'                 
                                           %k  <88F                                              
                                            "+:*%                                               

`

class PreFormattedCode extends React.Component {
    render() {
      return <React.Fragment><div className="prompted">{OUTZIDER}</div></React.Fragment>
    }
}

export default PreFormattedCode