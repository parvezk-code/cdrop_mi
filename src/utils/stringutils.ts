import _ from "lodash";

const mergeStrings = (args: (string | undefined | null)[],
    delimiter: string = " "): string => {

    if (_.isEmpty(args)) {
        return "";
    }

    return (args.filter(it => !_.isEmpty(it)) as string[])
        .reduce((prevVal, currValue) => {
            if (_.isEmpty(currValue))
                return prevVal;
            return prevVal + delimiter + currValue;
        });
}
export { mergeStrings };