import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { ViewBanner, IViewBannerProps } from "./components/ViewBanner";
import * as React from "react";

export class ViewBannerControl implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private container: HTMLDivElement;
    private notifyOutputChanged: () => void;

    constructor() { }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const props: IViewBannerProps = { 
            dataset: context.parameters.dataset,
            context: context
        };
        return React.createElement(
            ViewBanner, props
        );
    }

    public getOutputs(): IOutputs {
        return { };
    }

    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
