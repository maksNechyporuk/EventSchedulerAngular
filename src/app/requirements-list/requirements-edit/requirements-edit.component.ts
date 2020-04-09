import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Requirement } from '../requirements.model';
import { RequirementService } from '../requirement.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-requirements-edit',
  templateUrl: './requirements-edit.component.html',
  styleUrls: ['./requirements-edit.component.scss'],
})
export class RequirementsEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') reqForm: NgForm;
  constructor(private requirementService: RequirementService) {}
  subscription: Subscription;
  editMode = false;
  editedReq: Requirement;
  editedItem: number;
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this.requirementService.startEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItem = index;
        this.editedReq = this.requirementService.getSingleRequirement(index);
        console.log(this.reqForm);
        this.reqForm.setValue({
          title: this.editedReq.title,
          description: this.editedReq.description,
        });
      }
    );
  }
  onAddItem(form: NgForm) {
    const title = form.value.title;
    const description = form.value.description;
    const newRequirement = new Requirement(title, description);
    if (this.editMode) {
      this.requirementService.updateRequirements(
        this.editedItem,
        newRequirement
      );
    } else {
      this.requirementService.onAddRequirement(newRequirement);
    }
  }
  onReset() {
    this.editMode = false;
  }
  onDelete() {
    this.requirementService.deleteItem(this.editedItem);
    this.onReset();
    this.reqForm.reset();
  }
}
