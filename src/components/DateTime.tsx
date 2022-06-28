import { IonDatetime } from "@ionic/react";

import "./main.css";

const DateTime: React.FC = () => {
  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };
  return (
    <IonDatetime
      color="primary"
      // minuteValues="0,15,30,45"
      presentation="date"
      isDateEnabled={isWeekday}
      showDefaultButtons={true}
      min="2022-01-01T00:00:00"
      max="2222-12-31T23:59:59"
      onIonChange={(e) => console.log(`${e.detail.value} segment selected`)}
    ></IonDatetime>
  );
};
export default DateTime;
