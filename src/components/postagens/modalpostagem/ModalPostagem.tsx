import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
            <Popup 
                trigger={
                    <button 
                        className='border-2 rounded px-4 py-2 border-black bg-sky-600 font-semibold text-black hover:bg-sky-950 hover:text-white'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                
                <FormPostagem />
                
                
            </Popup>
        </>
    );
}

export default ModalPostagem;