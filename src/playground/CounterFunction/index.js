
export default function CounterFunction({ title, agree }) {

  return (
    <div>
      Func: {title} - 
      Agree: {agree ? 'Yes' : 'No'}
    </div>
  );
}

