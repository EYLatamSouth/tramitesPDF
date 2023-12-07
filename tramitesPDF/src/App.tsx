import '@react-pdf-viewer/core/lib/styles/index.css'
// import './App.css' 
import usePDF from './hooks/usePDF';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const tramiteParam = urlParams.get("id");
  const userParam = urlParams.get("usuario");

  const { result } = usePDF(tramiteParam, userParam)

  const url = URL.createObjectURL(result);

  return (
    <>
      <div className="App">
        <div className='test' style={{display: "flex", justifyContent: "center"}}>
          <embed src={`${url}#zoom=FitH`} width={1000} height={900}></embed>
        </div>
      </div>
    </>
  )
}

export default App
