import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <div class="search-box">
    <input
      type="text"
      class="form-control"
      placeholder="Busca gatos, memes, reacciones..."
      (keyup.enter)="searchUp()"
      #txtTagInput
    >
    <button type="button" class="search-button" (click)="searchUp()">Buscar</button>
  </div>
  `,
  styles: [`
    .search-box {
      display: flex;
      gap: 12px;
      max-width: 720px;
    }

    .form-control {
      min-height: 54px;
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.92);
      box-shadow: none;
      color: #0f172a;
    }

    .form-control:focus {
      border-color: #67e8f9;
      box-shadow: 0 0 0 4px rgba(103, 232, 249, 0.18);
    }

    .search-button {
      min-height: 54px;
      padding: 0 24px;
      border: 0;
      border-radius: 16px;
      background: linear-gradient(135deg, #22d3ee, #a78bfa);
      color: #0f172a;
      font-weight: 800;
      box-shadow: 0 14px 32px rgba(34, 211, 238, 0.24);
      transition: transform 160ms ease, box-shadow 160ms ease;
    }

    .search-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 18px 42px rgba(34, 211, 238, 0.32);
    }

    @media (max-width: 576px) {
      .search-box {
        flex-direction: column;
      }
    }
  `]
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) {

  }

  searchUp() {
    const newTag = this.tagInput.nativeElement.value.trim()

    if (!newTag) return

    this.gifsService.searchTag(newTag)

    this.tagInput.nativeElement.value = ''

  }


}
