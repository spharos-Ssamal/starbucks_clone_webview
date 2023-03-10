export default function Telecom(props : {telecomeEN: string, telecomeKR: string}) {

  const OPTIONS = [
    { value: 'SKT', label: 'SKT' },
    { value: 'KT', label: 'KT' },
    { value: 'LG U+', label: 'LG U+' },
    { value: 'SKT Light', label: 'SKT Light' },
    { value: 'KT Light', label: 'KT Light' },
    { value: 'LG U+ Light', label: 'LG U+ Light' }    
  ];

  // <Telecom options = {OPTIONS}></Telecom>
  
  return (
    <select>
      {/* {props.options.map((option) => (
        <option 
          key={option.telecomeEN}
          value={option.telecomeEN}
        >
          {option.telecomeKR}
        </option>

      ) )} */}
    </select>
  );
}