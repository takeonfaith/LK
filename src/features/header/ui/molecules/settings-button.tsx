import { FiSettings } from "react-icons/fi";

import SettingsPage from "../../../settings";
import Button from "../../../../shared/ui/atoms/button";
import { useModal } from "../../../modal";

const SettingsButton = () => {
  const { toggle } = useModal(<SettingsPage />);

  return <Button text="Настройки" icon={<FiSettings />} onClick={toggle} />;
};

export default SettingsButton;
