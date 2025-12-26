#!/usr/bin/env python3
"""
Product Catalog PDF Generator for Momai Traders
Creates a professional PDF catalog from product images
"""

from PIL import Image
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.lib.colors import HexColor, black, white
import os
from pathlib import Path

def create_product_catalog():
    # Setup paths
    image_dir = Path("images")
    output_pdf = "product-catalog.pdf"
    
    # Get all images
    image_files = sorted([f for f in image_dir.glob("*.jpeg") if f.is_file()])
    
    if not image_files:
        print("No images found in the images directory!")
        return
    
    print(f"Found {len(image_files)} images")
    
    # Create PDF with metadata
    c = canvas.Canvas(output_pdf, pagesize=A4)
    c.setTitle("Momai Traders - Product Catalog 2025")
    c.setAuthor("Momai Traders")
    c.setSubject("Wholesale Housekeeping & Hygiene Products Catalog")
    c.setKeywords("housekeeping, cleaning materials, hygiene products, wholesale")
    
    width, height = A4
    
    # First page - Custom catalogue cover image
    catalogue_cover = Path("images/Jigar Prajapati catalogue.png")
    if catalogue_cover.exists():
        # Draw the catalogue cover to fit the entire page
        c.drawImage(str(catalogue_cover), 0, 0, 
                   width=width, height=height, 
                   preserveAspectRatio=True, anchor='c')
    else:
        # Fallback to text if image not found
        c.setFillColor(HexColor("#0ea5e9"))
        c.rect(0, height - 3*inch, width, 3*inch, fill=True, stroke=False)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 32)
        c.drawCentredString(width/2, height - 1.5*inch, "MOMAI TRADERS")
        c.setFont("Helvetica-Bold", 20)
        c.drawCentredString(width/2, height - 2*inch, "Product Catalog 2025")
    
    c.showPage()
    
    # Product pages - 6 images per page (3x2 grid)
    images_per_page = 6
    cols = 3
    rows = 2
    
    # Calculate dimensions for perfect grid
    page_margin = 0.5 * inch
    page_border_margin = 0.3 * inch
    footer_space = 0.6 * inch  # Space for footer and page numbers
    usable_width = width - (2 * page_margin)
    usable_height = height - (2 * page_margin) - footer_space
    
    # Grid spacing
    h_spacing = 0.3 * inch
    v_spacing = 0.4 * inch
    
    # Calculate cell dimensions
    cell_width = (usable_width - ((cols - 1) * h_spacing)) / cols
    cell_height = (usable_height - ((rows - 1) * v_spacing)) / rows
    
    # Image box dimensions (leave space for text box below)
    text_box_height = 0.6 * inch
    img_box_width = cell_width - 0.1*inch
    img_box_height = cell_height - text_box_height - 0.1*inch
    
    page_started = False
    
    for idx, img_path in enumerate(image_files):
        # Draw page border at the start of each new page
        position = idx % images_per_page
        if position == 0:
            # Draw page border (leaving space for footer)
            c.setStrokeColor(HexColor("#374151"))
            c.setLineWidth(1.5)
            c.rect(page_border_margin, page_border_margin + footer_space, 
                   width - 2*page_border_margin, 
                   height - 2*page_border_margin - footer_space, 
                   fill=False, stroke=True)
            page_started = True
        
        # Calculate position in grid
        position = idx % images_per_page
        col = position % cols
        row = position // cols
        
        # Calculate x, y coordinates
        x = page_margin + (col * (cell_width + h_spacing))
        y = height - page_margin - ((row + 1) * (cell_height + v_spacing)) + v_spacing
        
        try:
            # Draw image area box (white background with border)
            img_x = x + 0.05*inch
            img_y = y + text_box_height
            c.setFillColor(white)
            c.rect(img_x, img_y, img_box_width, img_box_height, fill=True, stroke=False)
            
            # Add border around image area
            c.setStrokeColor(HexColor("#d1d5db"))
            c.setLineWidth(1)
            c.rect(img_x, img_y, img_box_width, img_box_height, fill=False, stroke=True)
            
            # Draw image with padding
            img_padding = 0.1 * inch
            c.drawImage(str(img_path), 
                       img_x + img_padding, 
                       img_y + img_padding, 
                       width=img_box_width - (2*img_padding), 
                       height=img_box_height - (2*img_padding), 
                       preserveAspectRatio=True, 
                       anchor='c')
            
            # Draw text box below image with border
            text_box_y = y
            c.setFillColor(HexColor("#f3f4f6"))
            c.rect(x + 0.05*inch, text_box_y, img_box_width, text_box_height, fill=True, stroke=False)
            
            # Add border around text box
            c.setStrokeColor(HexColor("#d1d5db"))
            c.setLineWidth(1)
            c.rect(x + 0.05*inch, text_box_y, img_box_width, text_box_height, fill=False, stroke=True)
            
            # Add product name
            product_name = img_path.stem.replace('-', ' ').replace('product ', 'Product #')
            c.setFillColor(black)
            c.setFont("Helvetica-Bold", 10)
            text_x = x + cell_width/2
            text_y = text_box_y + text_box_height/2 + 0.1*inch
            c.drawCentredString(text_x, text_y, product_name)
            
            # Add smaller subtitle
            c.setFont("Helvetica", 8)
            c.setFillColor(HexColor("#6b7280"))
            c.drawCentredString(text_x, text_y - 0.2*inch, "Housekeeping Product")
            
        except Exception as e:
            print(f"Error processing {img_path}: {e}")
        
        # New page after every 6 images or at the end
        if position == images_per_page - 1 or idx == len(image_files) - 1:
            # Add page number at bottom (bold, no border)
            c.setFillColor(black)
            c.setFont("Helvetica-Bold", 10)
            page_num = (idx // images_per_page) + 2  # +2 because first page is title
            c.drawCentredString(width/2, 0.3*inch, f"Page {page_num} of {(len(image_files) + images_per_page - 1) // images_per_page + 1}")
            
            c.showPage()
    
    # Save PDF
    c.save()
    print(f"✓ Product catalog created: {output_pdf}")
    print(f"✓ Total images included: {len(image_files)}")
    print(f"✓ Total pages: {(len(image_files) + images_per_page - 1) // images_per_page + 1}")
    print(f"✓ Layout: {cols}x{rows} grid ({images_per_page} products per page)")

if __name__ == "__main__":
    create_product_catalog()
