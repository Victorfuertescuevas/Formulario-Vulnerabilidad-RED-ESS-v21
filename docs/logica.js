/* ============================================
   DEFINICIÓN COMPLETA DE CATEGORÍAS, SUBCATEGORÍAS E ÍTEMS
   (Incluye todos los ítems del documento + los añadidos por ti)
============================================ */

const DATA = [
    {
        categoria: "Necesidades de carácter físico-biológico",
        subcategorias: [
            {
                nombre: "Alimentación",
                items: [
                    "Acude sin desayunar o sin almuerzo.",
                    "Dieta no equilibrada o signos de malnutrición.",
                    "Presenta signos de obesidad derivados de mala alimentación.",
                    "Conductas en comedor escolar: ansiedad ante la comida.",
                    "Conductas en comedor escolar: restricción de alimentos.",
                    "Inactividad física y hábitos sedentarios.",
                    "Falta de sueño."
                ]
            },
            {
                nombre: "Higiene",
                items: [
                    "Higiene corporal deficiente.",
                    "Higiene bucodental inadecuada.",
                    "Presencia de piojos o falta de aseo continuado."
                ]
            },
            {
                nombre: "Salud",
                items: [
                    "Enfermedades sin seguimiento adecuado.",
                    "Falta de adherencia a tratamientos médicos.",
                    "Vacunación incompleta o sin seguimiento.",
                    "Uso excesivo de urgencias en lugar de atención primaria."
                ]
            },
            {
                nombre: "Vivienda y suministros básicos",
                items: [
                    "Vivienda con condiciones deficientes (humedades, frío, etc.).",
                    "Faltan suministros básicos (luz, agua, gas).",
                    "La familia recibe ayudas sociales vinculadas a vivienda o suministros."
                ]
            }
        ]
    },

    {
        categoria: "Necesidades escolares",
        subcategorias: [
            {
                nombre: "Escolarización",
                items: [
                    "Asistencia irregular al centro.",
                    "Absentismo reiterado."
                ]
            },
            {
                nombre: "Pagos y becas",
                items: [
                    "Dificultades para pagar material escolar.",
                    "Dificultades económicas para excursiones.",
                    "Necesidad de beca de libros o comedor."
                ]
            },
            {
                nombre: "Seguimiento familiar",
                items: [
                    "Escaso seguimiento escolar.",
                    "No acuden a tutorías.",
                    "Falta de acompañamiento educativo."
                ]
            },
            {
                nombre: "Condiciones de estudio en casa",
                items: [
                    "No dispone de espacio adecuado para estudiar.",
                    "Falta de rutinas y hábitos de estudio.",
                    "Ruido o entorno no adecuado."
                ]
            },
            {
                nombre: "Brecha digital",
                items: [
                    "No dispone de dispositivos electrónicos.",
                    "No hay conexión a internet en casa.",
                    "Uso excesivo o inadecuado de pantallas."
                ]
            }
        ]
    },

    {
        categoria: "Necesidades socioeducativas",
        subcategorias: [
            {
                nombre: "Programas de apoyo educativo",
                items: [
                    "Participa en PROA por falta de apoyo familiar.",
                    "Necesidad de recursos municipales de apoyo."
                ]
            },
            {
                nombre: "Acceso al ocio educativo y cultural",
                items: [
                    "No participa en actividades deportivas.",
                    "No accede a actividades culturales por motivos económicos."
                ]
            },
            {
                nombre: "Socialización e integración",
                items: [
                    "Dificultades de integración general en el grupo.",
                    "Dificultades de integración en grupos de diferente sexo.",
                    "Necesidad de participación en programas para mejorar habilidades sociales."
                ]
            },
            {
                nombre: "Riesgo social",
                items: [
                    "Contexto de exclusión social o aislamiento.",
                    "Escasa participación en la comunidad."
                ]
            },
            {
                nombre: "Desarrollo personal",
                items: [
                    "Baja motivación.",
                    "Bajas expectativas de futuro.",
                    "Falta de referentes positivos."
                ]
            }
        ]
    },

    {
        categoria: "Necesidades emocionales y sociales",
        subcategorias: [
            {
                nombre: "Apego",
                items: [
                    "Muestra ansiedad de separación.",
                    "Vínculo inseguro o escaso.",
                    "Muestra afecto adecuado hacia el progenitor/tutor a la entrada/salida del centro."
                ]
            },
            {
                nombre: "Autorregulación emocional",
                items: [
                    "Dificultad para gestionar frustración.",
                    "Explosiones emocionales frecuentes."
                ]
            },
            {
                nombre: "Habilidades sociales",
                items: [
                    "Dificultad para resolver conflictos.",
                    "Bajo nivel de comunicación asertiva.",
                    "Baja empatía con iguales."
                ]
            }
        ]
    },

    {
        categoria: "Factores de vulnerabilidad sociofamiliar",
        subcategorias: [
            {
                nombre: "Clima familiar",
                items: [
                    "Clima tenso o conflictivo.",
                    "Escaso apoyo afectivo en el hogar."
                ]
            },
            {
                nombre: "Dinámica familiar",
                items: [
                    "Rutinas poco estructuradas.",
                    "Escaso acompañamiento educativo.",
                    "Falta de supervisión."
                ]
            },
            {
                nombre: "Contexto familiar",
                items: [
                    "Riesgo de pobreza.",
                    "Violencia o maltrato.",
                    "Idioma familiar distinto a lengua escolar.",
                    "Residencia en entorno empobrecido."
                ]
            }
        ]
    }
];

/* ============================================
   INSERCIÓN DINÁMICA DE ÍTEMS
============================================ */

function cargarItems() {
    const cont = document.getElementById("contenedorItems");

    DATA.forEach((cat, ci) => {
        const divCat = document.createElement("div");
        divCat.className = "categoria";
        divCat.innerHTML = `<h3>${cat.categoria}</h3>`;

        cat.subcategorias.forEach((sub, si) => {
            const divSub = document.createElement("div");
            divSub.className = "subcategoria";
            divSub.innerHTML = `<h4>${sub.nombre}</h4>`;

            sub.items.forEach((item, ii) => {
                const id = `c${ci}s${si}i${ii}`;
                const lbl = document.createElement("label");
                lbl.className = "checkbox-item";
                lbl.innerHTML = `<input type="checkbox" id="${id}"> ${item}`;
                divSub.appendChild(lbl);
            });

            divCat.appendChild(divSub);
        });

        cont.appendChild(divCat);
    });
}

window.onload = cargarItems;

/* ============================================
   CÁLCULO DE RESULTADOS
============================================ */

function calcularResultados() {
    let resumen = "";
    let riesgos = [];

    DATA.forEach((cat) => {
        let total = 0;
        let marcados = 0;

        cat.subcategorias.forEach((sub) => {
            sub.items.forEach((item, idx) => total++);
        });

        cat.subcategorias.forEach((sub, si) => {
            sub.items.forEach((item, ii) => {
                const chk = document.getElementById(`c${DATA.indexOf(cat)}s${si}i${ii}`);
                if (chk && chk.checked) marcados++;
            });
        });

        let nivel = "Leve";
        if (marcados / total >= 0.66) nivel = "Grave";
        else if (marcados / total >= 0.33) nivel = "Moderado";

        riesgos.push({ categoria: cat.categoria, nivel });

        resumen += `
            <div class="resultado-categoria riesgo-${nivel.toLowerCase()}">
                <strong>${cat.categoria}</strong><br>
                Nivel de riesgo: <strong>${nivel}</strong>
            </div>
        `;
    });

    document.getElementById("resumenResultados").innerHTML = resumen;
    document.getElementById("resultados").style.display = "block";

    generarPlan(riesgos);
}

/* ============================================
   AUTO-GENERACIÓN DEL PLAN INDIVIDUAL
============================================ */

function generarPlan(riesgos) {
    // Educación
    document.getElementById("planEduObj").value =
        "• Favorecer la asistencia regular y participación activa.\n" +
        "• Potenciar hábitos y rutinas de estudio.\n" +
        "• Mejorar la comunicación escuela-familia.";

    document.getElementById("planEduAct").value =
        "• Reuniones periódicas con tutoría.\n" +
        "• Sesiones de apoyo educativo.\n" +
        "• Ajuste de tareas y seguimiento personalizado.";

    // Servicios Sociales
    document.getElementById("planSocObj").value =
        "• Garantizar cobertura de necesidades básicas.\n" +
        "• Mejorar estabilidad familiar.\n" +
        "• Facilitar acceso a recursos comunitarios.";

    document.getElementById("planSocAct").value =
        "• Coordinación con servicios sociales de zona.\n" +
        "• Solicitud de ayudas económicas o alimentarias.\n" +
        "• Intervención familiar y seguimiento.";

    // Salud
    document.getElementById("planSaludObj").value =
        "• Mejorar adherencia sanitaria.\n" +
        "• Promover hábitos saludables.\n" +
        "• Coordinar seguimiento médico.";

    document.getElementById("planSaludAct").value =
        "• Citas con pediatría o medicina familiar.\n" +
        "• Derivación a salud mental si procede.\n" +
        "• Educación en higiene y alimentación.";
}

/* ============================================
   LIMPIAR FORMULARIO
============================================ */

function limpiarFormulario() {
    document.querySelectorAll("input[type=checkbox]").forEach(c => c.checked = false);
    document.getElementById("resultados").style.display = "none";
}

/* ============================================
   EXPORTACIÓN A WORD
============================================ */

async function generarWord() {
    const nombre = document.getElementById("inputNombre").value || "(Sin nombre)";
    const ev = document.getElementById("inputEvaluador").value || "(Sin evaluador)";
    const fecha = document.getElementById("inputFecha").value || "(Sin fecha)";
    const resultadosHTML = document.getElementById("resumenResultados").innerText;

    const {
        Document,
        Packer,
        Paragraph,
        TextRun
    } = docx;

    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                new Paragraph({
                    children: [new TextRun({ text: "Informe de Vulnerabilidad – RED-ESS", bold: true, size: 32 })]
                }),
                new Paragraph(" "),
                new Paragraph(`Alumno/a: ${nombre}`),
                new Paragraph(`Evaluador/a: ${ev}`),
                new Paragraph(`Fecha: ${fecha}`),
                new Paragraph(" "),
                new Paragraph({ children: [new TextRun({ text: "Resultados:", bold: true })] }),
                new Paragraph(resultadosHTML),
                new Paragraph(" "),
                new Paragraph({ children: [new TextRun({ text: "Plan de intervención individual", bold: true })] }),
                new Paragraph(" "),
                new Paragraph("Ámbito educativo — Objetivos:"),
                new Paragraph(document.getElementById("planEduObj").value),
                new Paragraph("Ámbito educativo — Actuaciones:"),
                new Paragraph(document.getElementById("planEduAct").value),
                new Paragraph("Ámbito servicios sociales — Objetivos:"),
                new Paragraph(document.getElementById("planSocObj").value),
                new Paragraph("Ámbito servicios sociales — Actuaciones:"),
                new Paragraph(document.getElementById("planSocAct").value),
                new Paragraph("Ámbito salud — Objetivos:"),
                new Paragraph(document.getElementById("planSaludObj").value),
                new Paragraph("Ámbito salud — Actuaciones:"),
                new Paragraph(document.getElementById("planSaludAct").value),
            ]
        }]
    });

    const blob = await Packer.toBlob(doc);
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `Informe_Vulnerabilidad_${nombre}.docx`;
    a.click();
}
