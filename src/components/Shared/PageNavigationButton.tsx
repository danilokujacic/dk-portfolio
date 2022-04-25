import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { useScreen } from "../../shared/screenSize";

interface IPageNavBtnProps {
    className:string;
    label?: string;
    navigateTo: string;
}

const PageNavigationButton: FunctionComponent<IPageNavBtnProps> = ({className, label, navigateTo}) => {
    const { isMobile } = useScreen();
  return (
    <a href={`#${navigateTo}`} className={`absolute scale-25 animate-pulse text-lg flex justify-center md:justify-start items-center ${className}`}><FontAwesomeIcon className="md:mr-4" size={isMobile ? "2x" : undefined} icon={faChevronDown} /> {!isMobile ? label || '' : ''}</a>
  )
}

export default PageNavigationButton