import InfoCardCmp from "../../../../component/InfoCardCmp";
import DateConverter from "../../../../service/converter/dateConverter";

const ProductionLineDetailsInfoCmp = ({productionLine}) => {
    const dateConverter = new DateConverter();

    const productionLineData = [
        {label: "Id:", value: productionLine.id},
        {label: "Name:", value: productionLine.lineName},
        {label: "Data utworzenia: ", value: dateConverter.toFullDateTime(productionLine.creationTimestamp)}
    ];
    return <InfoCardCmp data={productionLineData}/>
}

export default ProductionLineDetailsInfoCmp;