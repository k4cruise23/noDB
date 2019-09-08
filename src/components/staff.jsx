import React from 'react'

export default function Staff(){
    return(
        <section className='selectStaff'>
            <h1>Select your staff!</h1>
                <div className="selectors">
                    <select className="server">
                        <option>Server</option>
                        <option value="Shay">Shay</option>
                        <option value="Marcela">Marcela</option>
                        <option value="Katie">Katie</option>
                        <option value="Corbin">Corbin</option>
                        <option value="Brennan">Brennan</option>
                        <option value="Ash">Ash</option>
                        <option value="Jessica">Jessica</option>
                    </select>
                    <select className="busser">
                        <option>Busser</option>
                        <option value="Duncan">Duncan</option>
                        <option value="Angel">Angel</option>
                        <option value="Edwin">Edwin</option>
                    </select>
                    <select className="counter">
                        <option>Counter</option>
                        <option value="Vincent">Vincent</option>
                        <option value="Joline">Joline</option>
                        <option value="Ericka">Ericka</option>
                        <option value="Shay">Shay</option>
                        <option value="Marcela">Marclea</option>
                    </select>
                </div>
        </section>
    )
}