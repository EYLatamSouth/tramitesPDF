import '@react-pdf-viewer/core/lib/styles/index.css'
/* import './App.css' */
import usePDF from './hooks/usePDF';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const tramiteParam = urlParams.get("id");
  const userParam = urlParams.get("usuario");

  const { result } = usePDF(tramiteParam, userParam)

  const binarioTest = btoa(result)
  
  const base64toBlob = (data: string) => {
    // Cut the prefix `data:application/pdf;base64` from the raw base 64
    const base64WithoutPrefix = data.substring('data:application/pdf;base64,'.length);

    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    const out = new Uint8Array(length);

    while (length--) {
      out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: 'application/pdf' });
  };

  const blob = base64toBlob(binarioTest);
  const url = URL.createObjectURL(blob);

  return (
    <>
      <div className="App">
        <div className='test'>
{/*           <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={url} />
          </Worker> */}
          <embed src={`${url}#zoom=FitH`} width={1000} height={900}></embed>
        </div>
{/*         <div>
          <a href={PDF} download={fileName}>Descargar PDF</a>
        </div> */}
      </div>
    </>
  )
}

export default App
