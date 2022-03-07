/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if( t == "")
        return ""
    l = 0;
    r = 0;
    
    res = [-1,-1]
    reslen = Number.MAX_SAFE_INTEGER;
    Smap = new Map();
    Tmap = new Map();
    for(let char of t){
        need++;
        console.log(char)
        Smap.set(char,0)
        if(Tmap.has(char))
            Tmap.set(char,Tmap.get(char)+1);
        else
            Tmap.set(char,1);
        
    }
    var have = 0;
    var need = Tmap.size;
    
    
    
  //  console.log(Tmap);
    
    
     for(r = 0; r < s.length; r++){
        
        c = s[r]
         
        if(Smap.has(c))
            Smap.set(c,Smap.get(c)+1);
        else
            Smap.set(c,1);
      
        if(Tmap.has(c) && Smap.get(c) == Tmap.get(c))
            have += 1;
      //   console.log(have ,need)
         while(have == need){
             if( (r - l + 1) < reslen){
                 reslen = r - l + 1;
                 res = [l , r]
             }
                 
            
             
             // pop from left
             Smap.set(s[l], Smap.get(s[l])-1)
             if(Tmap.has(s[l]) && Smap.get(s[l]) < Tmap.get(s[l]))
                 have-- ;
             l += 1;
         }
         
     }
    
    if(reslen == Number.MAX_SAFE_INTEGER)
        return "";
    else{
        l = res[0];
        r = res[1];
        return s.slice(l,r+1)
    }
       

    
};