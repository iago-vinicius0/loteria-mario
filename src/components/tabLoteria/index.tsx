import './styles.css';


export default function TabLoteria(arrayNumbers: any) {
    const numberOptions = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
    ]
    console.log(arrayNumbers)
    return (
        <div className="containerTab">
        <div className='central-numbersTab'>
            {numberOptions.map((number, idx) => (
                <p
                key={idx}
                className={`number ${arrayNumbers.arrayNumbers.includes(number) ? 'selected' : ''}`}
              >
                {number <= 9 ? `0${number}` : number}
              </p>
            ))}
        </div>
    </div>
    )
}