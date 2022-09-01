import React,{useState} from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [count, setCount] = useState(0)

  const handleClick = (index) => {
    console.log('i was clicked',index)
    setActiveIndex(index)
  }

  const handleCount = (count) => {
    count = count + 1
    setCount(count)
  }
  
  const renderedItems = items.map((item,index) => {

    const active  = index === activeIndex ? 'active' : ''
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => handleClick(index)} className={"title " + active }>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={"content" + active }>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
     <div className="ui styled accordion">{renderedItems}
     <div className="button">
      <button onClick={()=> handleCount(count) } >click me</button>
      <h2>Current count</h2>: <span> {count} </span>
     </div>
    </div>
  )
  
};

export default Accordion;
