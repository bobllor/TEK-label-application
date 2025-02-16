export default function Moon({color = 'white', fill = 'none'}){
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill={fill} stroke={color}  
        strokeLinecap="round" strokeLinejoin="round" width={24} height={24}  strokeWidth={2}> 
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> 
        </svg> 
        </>
    )
}