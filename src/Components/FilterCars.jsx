import React, {useEffect, useState} from "react";
import '../App.css';
;

function FilterCars() {
    const [cars, setCars] = useState([]);
    const [displayCars, setDisplayCars] = useState([]);
    const [driverType, setDriverType] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [capacity, setCapacity] = useState('');
    const newDateTime = date + time;

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
        .then((response) => response.json())
        .then((data) => {
            console.log('data', data);
            setCars(data);
        })
        .catch((err) => {
            console.log('err'. err);
        })
    }, [])
    
    const filterCar = () => {
        console.log('merged time and date', newDateTime)
        console.log("date", date)
        const filteredCars = cars.filter(item => item.capacity >= capacity && (item.availableAt >= newDateTime));
        if (driverType === '' || date === '' || time === '' || capacity === '') {
          return alert('Form tidak lengkap!!');
        } else if (isNaN(capacity)){
          return alert('Pastikan isi form capacity dengan format angka!!');
        } else if (date > '2022-03-23'){
          return alert('Data mobil hanya tersedia di bulan maret atau sebelumnya!!');
        } else {
          setDisplayCars(filteredCars);
        }
       
    }

    return (
      <>
      
      <div className="container container-form d-flex justify-content-center pb-2" style={{position: 'relative', marginTop: '-61px', zIndex: 3, backgroundColor: 'white', boxShadow: '0 0 13px rgba(33,33,33,.2)', borderRadius: '10px'}}>
          <div className="row">
            <div className="col">
              <div className="m-2">
                <div className="form-group">
                    <label htmlFor="nama" className="control-label">Tipe Driver<span style={{color: 'red'}}>*</span></label>
                    <div className="col-sm-24">
                            <select class="form-control" id="tipeDriver" placeholder="Tipe Driver" onChange={(e) => setDriverType(e.target.value)} required>
                                <option disabled selected hidden>Pilih Tipe Driver</option>
                                <option value="denganSopir">Dengan Sopir</option>
                                <option value="tanpaSopir">Tanpa Sopir (Lepas Kunci)</option>
                                <label class="input-group-text" for="inputGroupSelect02">Options</label>
                            </select>
                        {/* <input type="text" name="nama" className="form-control" id="nama" placeholder="Nama" onChange={(e) => setDriverType(e.target.value)}/> */}
                    </div>
                </div>
                {/* <small>Error Message</small>*/}
              </div> 
            </div>
            <div className="col">
              <div className="m-2">
              <div className="form-group">
                    <label htmlFor="nama" className="control-label">Tanggal<span style={{color: 'red'}}>*</span></label>
                    <div className="col-sm-24">
                        <input type="date" name="nama" className="form-control" id="nama" placeholder="Nama" onChange={(e) => setDate(e.target.value)} required/>
                    </div>
                </div>
                {/* <small>Error Message</small> */}
              </div>
            </div>
            <div className="col">
              <div className="m-2">
              <div className="form-group">
                    <label htmlFor="nama" className="control-label">Waktu<span style={{color: 'red'}}>*</span></label>
                    <div className="col-sm-24">
                        <input type="time" name="nama" className="form-control" id="nama" placeholder="Nama" onChange={(e) => setTime(e.target.value)} required/>
                    </div>
                </div>
                {/* <small>Error Message</small>     */}
              </div>
            </div>
            <div className="col">
              <div className="m-2">
              <div className="form-group">
                    <label htmlFor="nama" className="control-label" style={{fontSize: '13px'}}>Jumlah Penumpang<span style={{color: 'red'}}>*</span></label>
                    <div className="col-sm-24">
                        <input type="text" name="nama" className="form-control" id="nama" placeholder="Jumlah Penumpang" onChange={(e) => setCapacity(e.target.value)} required/>
                    </div>
                </div>
                {/* <small>Error Message</small> */}
              </div>
            </div>
            <div className="col" style={{marginTop: '23px'}}>
              <div className="btn-form btn-filter-car m-2">
                <label htmlFor="btnForm" />
                <button id="load-btn" className="btn btn-success" type="submit" onClick={filterCar}>Cari Mobil</button>
              </div>
            </div>
          </div>
        </div>
        <div>
            
        <div className="container">
          <div className="row mt-5">
            {   
              displayCars.length > 0 ? (
              displayCars.map((item) =>
              <>
              <div className="col-lg-4 col-md-6 col-12 g-5"> 
                <div className="card" style={{ minHeight: '655px'}}> 
                  <img className="card-img-top img-fluid" style={{width: 'auto', height: '250px'}} src={item.image} alt={item.manufacture} /> 
                    <div className="card-block px-3"> 
                      <div className="container-text" style={{margin: '10px'}}> 
                        <h4 className="card-title">Model Car: {item.model}</h4> 
                        <h4>Rp. {item.rentPerDay}</h4> 
                        <p>{item.description}</p> 
                        <p className="card-text">Capacity: {item.capacity}</p> 
                        <p className="card-text">Transmission: {item.transmission}</p> 
                        <p className="card-text">Year: {item.year}</p> 
                        <p className="card-text">Available Time: {item.availableAt}</p> 
                        <div className="row pb-4"> <div className="col text-center"> 
                          <button className="btn btn-success" style={{paddingRight: '100px!important', paddingLeft: '100px!important'}}>Pilih Mobil</button> 
                        </div> 
                      </div> 
                    </div> 
                  </div> 
                </div> 
              </div>         
              </>
                )) : <p className="text-center">Data Mobil Tidak Tersedia</p>
                
            }
          </div>
        </div>
                 
      </div>
    </>
    );
  }
  
  export default FilterCars;