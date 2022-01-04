
const Footer = ({items, compItems}) => {
    return (
        <footer>
            {compItems.length} of {items.length} items completed
        </footer>
    );
}

export default Footer;