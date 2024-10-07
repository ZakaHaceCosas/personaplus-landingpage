export default function Button({ customStyle = "", text, action, isDropdown }) {
    let finalClassName;

    switch (customStyle) {
        case "ACE":
            finalClassName =
                "btn buttonAce" + (isDropdown ? " dropdownBtn" : "");
            break;
        case "GOD":
            finalClassName =
                "btn buttonGod" + (isDropdown ? " dropdownBtn" : "");
            break;
        case "WOR":
            finalClassName =
                "btn buttonWor" + (isDropdown ? " dropdownBtn" : "");
            break;
        default:
            finalClassName = "btn";
            break;
    }

    return (
        <button className={finalClassName} onClick={action}>
            {text}
        </button>
    );
}
