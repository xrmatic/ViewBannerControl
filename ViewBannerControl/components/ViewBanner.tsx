import * as React from 'react';
import { useState } from 'react';
import { Stack, StackItem, IStackTokens} from '@fluentui/react';
import { IInputs } from "../generated/ManifestTypes";

type DataSet = ComponentFramework.PropertyTypes.DataSet;
type Context = ComponentFramework.Context<IInputs>;

export interface IViewBannerProps {
    dataset: DataSet,
    context: Context
}

export interface IStackItem {
    item: JSX.Element | undefined,
}

const stackTokens: IStackTokens = { childrenGap: 40 };

export const ViewBanner = React.memo(({ dataset, context } : IViewBannerProps) : JSX.Element => {
    console.log('~~ ViewBanner ~~');
    console.log(dataset);
    console.log(context);

    const [ stackItemState, setStackItemState ] = useState([] as IStackItem[]);
    const label = dataset.columns[0].name;

    return (
        <Stack horizontal tokens={stackTokens} className='viewBannerStack'>
        {
            dataset.sortedRecordIds.map((id) => (
                <StackItem className='viewBannerStackItem' data-id={id} title={dataset.records[id].getFormattedValue(label)}><span className='viewBannerArrow' />{dataset.records[id].getFormattedValue(label)}</StackItem>
            ))
        }
        </Stack>
    );
});