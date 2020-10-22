import React from 'react';

const Fetch = ({data}) => {
    return (
        <div className="row">
                {data && data.map((row) => (
            		<div key={row.id}>{row.nama}</div>
              ))}
        </div>
	)
}

export default Fetch;