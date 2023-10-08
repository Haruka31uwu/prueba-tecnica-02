export const getDevice=()=>{
    const device=window.addEventListener('resize',()=>{
        if(window.innerWidth<768){
            return 'mobile'
        }else{
            return 'desktop'
        }
    })
    return device
}