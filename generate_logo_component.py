import xml.etree.ElementTree as ET
import re
import os

def generate_logo_component():
    svg_path = r"e:\Jay-Creations\public\logo.svg"
    output_path = r"e:\Jay-Creations\src\components\animations\LogoSvg.tsx"

    try:
        tree = ET.parse(svg_path)
        root = tree.getroot()
    except Exception as e:
        print(f"Error parsing SVG: {e}")
        return

    # SVG namespace
    ns = {'svg': 'http://www.w3.org/2000/svg'}
    
    paths_data = []
    
    # Find all path elements
    # We use .//svg:path to find all paths at any depth, handling the namespace
    for i, path in enumerate(root.findall('.//svg:path', ns)):
        d = path.get('d')
        fill = path.get('fill', '#FFFFFF') # Default to white if no fill
        stroke = path.get('stroke')
        transform = path.get('transform')
        
        path_data = {
            "id": i,
            "d": d,
            "fill": fill,
        }
        
        if stroke:
            path_data["stroke"] = stroke
        if transform:
            path_data["transform"] = transform
            
        paths_data.append(path_data)

    print(f"Found {len(paths_data)} paths.")

    # Calculate delay per path to fit animation within ~2.5 seconds
    total_duration = 2.5
    delay_per_path = total_duration / len(paths_data) if paths_data else 0
    
    # Generate React Component
    # We use double curly braces {{ }} to escape them in the f-string
    component_code = f"""
"use client"

import {{ motion }} from "framer-motion"

const paths = {paths_data}

export default function LogoSvg() {{
    return (
        <svg
            viewBox="0 0 1024 1024"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
        >
            {{paths.map((path, index) => (
                <motion.path
                    key={{path.id}}
                    d={{path.d}}
                    transform={{path.transform}}
                    initial={{{{ pathLength: 0, fillOpacity: 0, strokeOpacity: 1 }}}}
                    animate={{{{ pathLength: 1, fillOpacity: 1, strokeOpacity: 0 }}}}
                    transition={{{{
                        pathLength: {{ duration: 2, ease: "easeInOut", delay: index * {delay_per_path} }},
                        fillOpacity: {{ duration: 1, ease: "easeOut", delay: 1.5 + index * {delay_per_path} }},
                        strokeOpacity: {{ duration: 0.5, ease: "easeOut", delay: 2 + index * {delay_per_path} }}
                    }}}}
                    stroke={{path.fill}} 
                    strokeWidth="2"
                    fill={{path.fill}}
                />
            ))}}
        </svg>
    )
}}
"""

    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(component_code)
        print(f"Successfully generated {output_path}")
    except Exception as e:
        print(f"Error writing component: {e}")

if __name__ == "__main__":
    generate_logo_component()
