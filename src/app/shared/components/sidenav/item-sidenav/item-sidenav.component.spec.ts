import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSidenavComponent } from './item-sidenav.component';

describe('ItemSidenavComponent', () => {
  let component: ItemSidenavComponent;
  let fixture: ComponentFixture<ItemSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemSidenavComponent]
    });
    fixture = TestBed.createComponent(ItemSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
