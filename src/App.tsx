import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const images = [
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d2?w=800",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800"
  ];
  const [imgIndex, setImgIndex] = useState<number | null>(null);

  return (
    <div style={{fontFamily: 'Arial', padding: '20px', maxWidth: '1000px', margin: 'auto'}}>
      <h1>Modern Apartment in Bengaluru</h1>
      <p>Bengaluru, Karnataka · 4.8★ (124 reviews)</p>
      
      <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '8px', height: '400px'}}>
        {images.map((img, i) => <img key={i} src={img} onClick={()=>setShow(true)} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'12px', cursor:'pointer'}} />)}
      </div>
      
      <button onClick={()=>setShow(true)} style={{marginTop:'10px', padding:'10px 20px', border:'1px solid black', borderRadius:'8px', background:'white', cursor:'pointer'}}>
        Show all photos
      </button>

      {show && (
        <div style={{position:'fixed', top:0, left:0, right:0, bottom:0, background:'white', zIndex:50, padding:'20px', overflow:'auto'}}>
          <button onClick={()=>setShow(false)} style={{fontSize:'24px', cursor:'pointer'}}>✕ Close</button>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'10px', marginTop:'20px'}}>
            {images.map((img, i)=><img key={i} src={img} onClick={()=>setImgIndex(i)} style={{width:'100%', height:'200px', objectFit:'cover', borderRadius:'8px', cursor:'pointer'}} />)}
          </div>
        </div>
      )}

      {imgIndex!== null && (
        <div onClick={()=>setImgIndex(null)} style={{position:'fixed', top:0, left:0, right:0, bottom:0, background:'rgba(0,0,0,0.8)', zIndex:60, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}}>
          <img src={images[imgIndex]} style={{maxHeight:'90%', maxWidth:'90%'}} />
        </div>
      )}
    </div>
  );
}

export default App;