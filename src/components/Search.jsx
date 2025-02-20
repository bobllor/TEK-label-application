import { useRef } from 'react';
import { useTicketContext } from '../context/TicketContext';
import { useSettingsContext } from '../context/SettingsContext';
import SearchIcon from '../svgs/SearchIcon';
import { useEffect } from 'react';

export default function Search({ file }){
    const searchValue = useRef();
    const { ticketsClicked, setTicketsClicked, ticketNumbers } = useTicketContext();
    const { settings } = useSettingsContext();

    const handleKeyDown = (e) => {  
        const value = searchValue.current.value.toUpperCase().trim();   
        if(e.key === 'Enter' && value.trim() != ''){
            if(value in ticketNumbers.current){
                if(!ticketsClicked.has(value)){
                    setTicketsClicked(t => (
                        new Set([...t, value])
                    ))
                }
                
                window.pywebview.api.create_label(ticketNumbers.current[value]);
            }else{
                alert('RITM is not found.');
            }

            searchValue.current.value = '';
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        document.addEventListener('click', () => {
            searchValue.current.focus();
        }, { signal })
        document.addEventListener('keydown', () => {
            searchValue.current.focus();
        }, { signal })

        return () => {
            controller.abort();
        }
    }, [])
        
    return (
        <>
            <div className="flex justify-center rounded-[18px] w-275 h-11 border-1
            shadow-[0_2px_8px_0_rgba(0,0,0,.15)] border-[#dfe1e5] bg-white">
                <div className="flex items-center w-full">
                    <div className='pl-3.5'>
                        <SearchIcon color={'black'} />
                    </div>
                    <div className='px-3 flex justify-center h-full w-full'>
                        <input type="search" className='text-black w-full outline-0' ref={searchValue}
                        placeholder={file ? 'Enter a RITM number' : 'Enter a file'} disabled={file && !settings ? false : true}
                        onKeyDown={e => handleKeyDown(e)}
                        spellCheck={false} autoFocus={true} />
                    </div>
                </div>
            </div>
        </>
    )
}