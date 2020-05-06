// import './polyfills'

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { WelcomeComponent } from './featured/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FormControlsComponent } from './featured/form-controls/form-controls.component';
import { NavigationComponent } from './featured/navigation/navigation.component';
import { LayoutComponent } from './featured/layout/layout.component';
import { BtnIndicatorComponent } from './featured/btn-indicator/btn-indicator.component';
import { PopupModalComponent } from './featured/popup-modal/popup-modal.component';
import { TableComponent } from './featured/table/table.component';
import { SimpleComponent } from './featured/form-controls/autocomplete/simple/simple.component';
import { AutocompleteOverviewComponent } from './featured/form-controls/autocomplete/autocomplete-overview/autocomplete-overview.component';
import { AutocompleteOptionComponent } from './featured/form-controls/autocomplete/autocomplete-option/autocomplete-option.component';
import { CheckboxComponent } from './featured/form-controls/checkbox/checkbox/checkbox.component';
import { DatepickerBasicComponent } from './featured/form-controls/datepicker/datepicker-basic/datepicker-basic.component';
import { DatepickerDisabledComponent } from './featured/form-controls/datepicker/datepicker-disabled/datepicker-disabled.component';
import { DatepickerTouchuiComponent } from './featured/form-controls/datepicker/datepicker-touchui/datepicker-touchui.component';
import { FormFieldBasicComponent } from './featured/form-controls/form-field/form-field-basic/form-field-basic.component';
import { InputBasicComponent } from './featured/form-controls/input/input-basic/input-basic.component';
import { RadioBtnComponent } from './featured/form-controls/radio-button/radio-btn/radio-btn.component';
import { SelectFormComponent } from './featured/form-controls/select/select-form/select-form.component';
import { SelectDisabledComponent } from './featured/form-controls/select/select-disabled/select-disabled.component';
import { SelectMulitpleComponent } from './featured/form-controls/select/select-mulitple/select-mulitple.component';
import { SelectCustomPanelComponent } from './featured/form-controls/select/select-custom-panel/select-custom-panel.component';
import { SelectErrorComponent } from './featured/form-controls/select/select-error/select-error.component';
import { SliderConfigComponent } from './featured/form-controls/slider/slider-config/slider-config.component';
import { SliderToggleComponent } from './featured/form-controls/slider/slider-toggle/slider-toggle.component';
import { MenuBasicComponent } from './featured/navigation/menu/menu-basic/menu-basic.component';
import { MenuIconsComponent } from './featured/navigation/menu/menu-icons/menu-icons.component';
import { MenuNestedComponent } from './featured/navigation/menu/menu-nested/menu-nested.component';
import { ToolbarMultirowComponent } from './featured/navigation/toolbar/toolbar-multirow/toolbar-multirow.component';
import { SidenavAutoComponent } from './featured/navigation/sidenav/sidenav-auto/sidenav-auto.component';
import { SidenavModeComponent } from './featured/navigation/sidenav/sidenav-mode/sidenav-mode.component';
import { SidenavFixedComponent } from './featured/navigation/sidenav/sidenav-fixed/sidenav-fixed.component';
import { LayoutCardComponent } from './featured/layout/layout-card/layout-card.component';
import { DividerBasicComponent } from './featured/layout/divider-basic/divider-basic.component';
import { ExpPanelBasicComponent } from './featured/layout/exp-panel-basic/exp-panel-basic.component';
import { ExpPanelAccordComponent } from './featured/layout/exp-panel-accord/exp-panel-accord.component';
import { GridlistComponent } from './featured/layout/gridlist/gridlist.component';
import { LayoutListComponent } from './featured/layout/layout-list/layout-list.component';
import { StepperOverviewComponent } from './featured/layout/stepper/stepper-overview/stepper-overview.component';
import { StepperVerticalComponent } from './featured/layout/stepper/stepper-vertical/stepper-vertical.component';
import { TabsBasicComponent } from './featured/layout/tabs/tabs-basic/tabs-basic.component';
import { TabsDynamicHeightComponent } from './featured/layout/tabs/tabs-dynamic-height/tabs-dynamic-height.component';
import { TabsOptionComponent } from './featured/layout/tabs/tabs-option/tabs-option.component';
import { TreeDynamicComponent } from './featured/layout/tree/tree-dynamic/tree-dynamic.component';
import { TreeCheckboxComponent } from './featured/layout/tree/tree-checkbox/tree-checkbox.component';
import { TreeFlatComponent } from './featured/layout/tree/tree-flat/tree-flat.component';
import { BtnOverviewComponent } from './featured/btn-indicator/btn/btn-overview/btn-overview.component';
import { BtnToggleBasicComponent } from './featured/btn-indicator/btn-toggle/btn-toggle-basic/btn-toggle-basic.component';
import { BtnExclusiveComponent } from './featured/btn-indicator/btn-toggle/btn-exclusive/btn-exclusive.component';
import { BadgeOverviewComponent } from './featured/btn-indicator/badge/badge-overview/badge-overview.component';
import { ChipsBasicComponent } from './featured/btn-indicator/chips/chips-basic/chips-basic.component';
import { ChipsAutocompleteComponent } from './featured/btn-indicator/chips/chips-autocomplete/chips-autocomplete.component';
import { ChipsInputComponent } from './featured/btn-indicator/chips/chips-input/chips-input.component';
import { ChipsStackedComponent } from './featured/btn-indicator/chips/chips-stacked/chips-stacked.component';
import { IconOverviewComponent } from './featured/btn-indicator/icon/icon-overview/icon-overview.component';
import { ProgressBarConfigComponent } from './featured/btn-indicator/progress-bar/progress-bar-config/progress-bar-config.component';
import { ProgressSpinnerConfigComponent } from './featured/btn-indicator/progress-spinner/progress-spinner-config/progress-spinner-config.component';
import { RippleBasicComponent } from './featured/btn-indicator/ripple/ripple-basic/ripple-basic.component';
import { DialogContentExampleComponent, DialogContentExampleDialog } from './featured/popup-modal/dialog/dialog-content-example/dialog-content-example.component';
import { BottomSheetOverviewExampleComponent, BottomSheetOverviewExampleSheet } from './featured/popup-modal/bottom-sheet/bottom-sheet-overview-example/bottom-sheet-overview-example.component';
import { SnackBarOverviewExampleComponent } from './featured/popup-modal/snackbar/snack-bar-overview-example/snack-bar-overview-example.component';
import { TooltipOverviewComponent } from './featured/popup-modal/tooltip/tooltip-overview/tooltip-overview.component';
import { TooltipPositionComponent } from './featured/popup-modal/tooltip/tooltip-position/tooltip-position.component';
import { TooltipCustomClassComponent } from './featured/popup-modal/tooltip/tooltip-custom-class/tooltip-custom-class.component';
import { PaginatorConfigComponent } from './featured/table/paginator/paginator-config/paginator-config.component';
import { SortingOverviewComponent } from './featured/table/sort-header/sorting-overview/sorting-overview.component';
import { TableBasicFlexComponent } from './featured/table/table/table-basic-flex/table-basic-flex.component';
import { TableExpandableRowsComponent } from './featured/table/table/table-expandable-rows/table-expandable-rows.component';
import { TableFilteringComponent } from './featured/table/table/table-filtering/table-filtering.component';
import { TableFooterRowComponent } from './featured/table/table/table-footer-row/table-footer-row.component';
import { TableHttpComponent } from './featured/table/table/table-http/table-http.component';
import { TableMultipleHeaderComponent } from './featured/table/table/table-multiple-header/table-multiple-header.component';
import { TableOverviewComponent } from './featured/table/table/table-overview/table-overview.component';
import { TablePaginationComponent } from './featured/table/table/table-pagination/table-pagination.component';
import { TableSelectionComponent } from './featured/table/table/table-selection/table-selection.component';
import { TableSortingComponent } from './featured/table/table/table-sorting/table-sorting.component';
import { TableReorderableComponent } from './featured/table/table/table-reorderable/table-reorderable.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidenavListComponent,
    FormControlsComponent,
    NavigationComponent,
    LayoutComponent,
    BtnIndicatorComponent,
    PopupModalComponent,
    TableComponent,
    SimpleComponent,
    AutocompleteOverviewComponent,
    AutocompleteOptionComponent,
    CheckboxComponent,
    DatepickerBasicComponent,
    DatepickerDisabledComponent,
    DatepickerTouchuiComponent,
    FormFieldBasicComponent,
    InputBasicComponent,
    RadioBtnComponent,
    SelectFormComponent,
    SelectDisabledComponent,
    SelectMulitpleComponent,
    SelectCustomPanelComponent,
    SelectErrorComponent,
    SliderConfigComponent,
    SliderToggleComponent,
    MenuBasicComponent,
    MenuIconsComponent,
    MenuNestedComponent,
    ToolbarMultirowComponent,
    SidenavAutoComponent,
    SidenavModeComponent,
    SidenavFixedComponent,
    LayoutCardComponent,
    DividerBasicComponent,
    ExpPanelBasicComponent,
    ExpPanelAccordComponent,
    GridlistComponent,
    LayoutListComponent,
    StepperOverviewComponent,
    StepperVerticalComponent,
    TabsBasicComponent,
    TabsDynamicHeightComponent,
    TabsOptionComponent,
    TreeDynamicComponent,
    TreeCheckboxComponent,
    TreeFlatComponent,
    BtnOverviewComponent,
    BtnToggleBasicComponent,
    BtnExclusiveComponent,
    BadgeOverviewComponent,
    ChipsBasicComponent,
    ChipsAutocompleteComponent,
    ChipsInputComponent,
    ChipsStackedComponent,
    IconOverviewComponent,
    ProgressBarConfigComponent,
    ProgressSpinnerConfigComponent,
    RippleBasicComponent,
    DialogContentExampleComponent,
    DialogContentExampleDialog,
    BottomSheetOverviewExampleComponent,
    BottomSheetOverviewExampleSheet,
    SnackBarOverviewExampleComponent,
    TooltipOverviewComponent,
    TooltipPositionComponent,
    TooltipCustomClassComponent,
    PaginatorConfigComponent,
    SortingOverviewComponent,
    TableBasicFlexComponent,
    TableExpandableRowsComponent,
    TableFilteringComponent,
    TableFooterRowComponent,
    TableHttpComponent,
    TableMultipleHeaderComponent,
    TableOverviewComponent,
    TablePaginationComponent,
    TableSelectionComponent,
    TableSortingComponent,
    TableReorderableComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  entryComponents:[
    DialogContentExampleComponent,
    DialogContentExampleDialog,
    BottomSheetOverviewExampleComponent,
    BottomSheetOverviewExampleSheet,
    SnackBarOverviewExampleComponent,
    TooltipOverviewComponent,
    TooltipPositionComponent,
    PaginatorConfigComponent,
    SortingOverviewComponent,
    TableBasicFlexComponent,
    TableExpandableRowsComponent,
    TableFilteringComponent,
    TableFooterRowComponent,
    TableHttpComponent,
    TableMultipleHeaderComponent,
    TableOverviewComponent,
    TablePaginationComponent,
    TableSelectionComponent,
    TableSortingComponent,
    TableReorderableComponent
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
