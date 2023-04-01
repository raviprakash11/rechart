export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          {/* <p className="label">{`${label} : ${payload[0].value}`}</p> */}
          <div>
            {payload.map((pld) => (
              <div style={{ display: "inline-block", padding: 10,writingMode: 'vertical-rl' }}>
                {/* <div style={{ color: pld.fill,writingMode: 'vertical-rl' }}>{pld.value}</div> */}
                <div style={{ color: "gray", writingMode: 'vertical-rl' }}>{pld.dataKey} drivers</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  
    return null;
  };  